<template>
  <div class="wrapper">
    <div class="message-container">
      <div v-for="(message, idx) in messages" :key="idx" class="message">
        {{message}}
      </div>
    </div>

    <Health v-if="player" :health="player.health" />

    <div class="controls">
      <div class="keys-list">
        <Key :text="'⇦'" @clicked="onClick" />
        <Key :text="'⇧'" @clicked="onClick" />
        <Key :text="'⇩'" @clicked="onClick" />
        <Key :text="'⇨'" @clicked="onClick" />
      </div>
    </div>
  </div>
</template>

<script>
import Key from '../components/Key.vue';
import Health from '../components/Health.vue';

export default {
  name: 'Game',
  components: {
    Key,
    Health
  },
  data() {
    return {
      level: 1,
      player: null,
      messages: []
    };
  },
  sockets: {
    move: function(data) {
      if (data.player) {
        this.player = data.player;
      }
      this.messages.push(data.text);
      const container = this.$el.querySelector('.message-container');
      container.scrollTop = container.scrollHeight;
    },
    init: function(data) {
      this.messages = [];
      this.level = data.level;
      this.player = data.player;
      this.messages.push(`
        Welcome to Dot Rogue. You are on level ${this.level}. Good luck!
      `);
    }
  },
  methods: {
    onClick(dir) {
      const directions = {
        '⇦': 'left',
        '⇧': 'up',
        '⇩': 'down',
        '⇨': 'right'
      };
      this.$socket.emit('move', directions[dir]);
    }
  }
}
</script>

<style scoped>
.wrapper {
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
}

.message-container {
  flex: 1;
  width: 100%;
  padding: 16px;
  display: flex;
  overflow: scroll;
  margin-bottom: 32px;
  flex-direction: column;
  align-items: flex-start;
  height: calc(100% - 120px);
}

.message-container > :first-child {
  margin-top: auto;
}

.message {
  color: #c9d1d9;
  text-align: left;
}

.controls {
  bottom: 0;
  width: 100%;
  padding: 24px 16px 48px;
  border-top: 1px solid #21262d;
}

.keys-list {
  column-gap: 8px;
  display: inline-grid;
  grid-template-columns: repeat(4, 2.75rem);
}
</style>
