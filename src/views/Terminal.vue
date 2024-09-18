<template>
  <div>
    <button @click="toggleTerminal">
      {{ isTerminalVisible ? 'Hide Terminal' : 'Show Terminal' }}
    </button>
    <div v-if="isTerminalVisible" ref="terminalContainer" class="terminal-container"></div>
  </div>
</template>

<script>
import { Terminal } from 'xterm';
import { FitAddon } from 'xterm-addon-fit';
import { WebglAddon } from 'xterm-addon-webgl';

export default {
  name: 'Terminal',
  data() {
    return {
      terminal: null,
      fitAddon: null,
      webglAddon: null,
      isTerminalVisible: false,
      input: '',
    };
  },
  methods: {
    toggleTerminal() {
      this.isTerminalVisible = !this.isTerminalVisible;
      if (this.isTerminalVisible) {
        this.$nextTick(() => {
          // Ensure the terminal container is in the DOM
          if (!this.terminal) {
            this.initializeTerminal();
          } else {
            this.fitAddon.fit();
          }
        });
      }
    },
    initializeTerminal() {
      this.terminal = new Terminal();
      this.fitAddon = new FitAddon();
      this.webglAddon = new WebglAddon();

      this.terminal.loadAddon(this.fitAddon);
      this.terminal.loadAddon(this.webglAddon);

      this.terminal.open(this.$refs.terminalContainer);
      this.fitAddon.fit();

      // Clear terminal and set initial welcome message
      this.terminal.clear();
      this.terminal.write('\x1b[32mWelcome to the Terminal!\x1b[0m\r\n');
      this.terminal.write('Type something and press Enter to call the API:\r\n> ');

      // Event listener for terminal input
      this.terminal.onData(this.handleTerminalInput);
    },
    async handleTerminalInput(data) {
      const code = data.charCodeAt(0);

      if (code === 13) { // Enter key
        const input = this.input.trim();
        this.input = ''; // Clear the input buffer
        if (input) {
          this.terminal.write('\r\n');
          await this.callApi(input);
        }
        this.terminal.write('\r\n> ');
      } else if (code === 127) { // Backspace key
        if (this.input.length > 0) {
          this.input = this.input.slice(0, -1);
          this.terminal.write('\b \b'); // Move cursor back, write space to clear, then move cursor back again
        }
      } else {
        this.input += data;
        this.terminal.write(data);
      }
    },
    async callApi(input) {
      try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${input}`);
        if (!response.ok) throw new Error('Network response was not ok');
        const data = await response.json();
        this.terminal.write(`\x1b[34mTitle:\x1b[0m ${data.title}\r\n`);
        this.terminal.write(`\x1b[34mBody:\x1b[0m ${data.body}\r\n`);
      } catch (error) {
        console.error('API call failed', error);
        this.terminal.write('\x1b[31mFailed to fetch data from API.\x1b[0m\r\n');
      }
    },
  },
};
</script>

<style scoped>
.terminal-container {
  width: 100%;
  height: 600px; /* Adjust the height as needed */
  border: 1px solid #ccc;
  margin-top: -30%;
  /* margin-bottom: 50; */
}
</style>





