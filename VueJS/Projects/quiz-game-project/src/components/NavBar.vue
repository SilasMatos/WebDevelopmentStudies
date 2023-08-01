<template>
  <div class="navbar">
    <div class="logo">Meu Logo</div>
    <div class="menu" :class="{ open: isMenuOpen }">
      <div class="toggle-btn" @click="toggleMenu">
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul>
        <li><router-link to="/">Homeas</router-link></li>
        <li><router-link to="/about">About</router-link></li>
        <li><router-link to="/contact">Contact</router-link></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isMenuOpen: false
    };
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    }
  }
};
</script>

<style lang="scss">
/* Estilos da Navbar */
$navbar-background-color: #d81010;

.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: $navbar-background-color;
  padding: 10px;
  color: white;

  .logo {
    font-size: 24px;
  }

  .menu {
    display: flex;
    align-items: center;

    .toggle-btn {
      display: none;
      flex-direction: column;
      justify-content: space-between;
      width: 30px;
      height: 21px;
      cursor: pointer;

      span {
        width: 100%;
        height: 3px;
        background-color: white;
        display: block;
        border-radius: 3px;
      }
    }

    ul {
      display: flex;
      list-style: none;
      margin: 0;
      padding: 0;

      li {
        margin-left: 20px;

        a {
          color: white;
          text-decoration: none;

          &:hover {
            text-decoration: underline;
          }
        }
      }
    }

    &.open {
      .toggle-btn {
        span {
          &:first-child {
            transform: translateY(8px) rotate(45deg);
          }

          &:nth-child(2) {
            opacity: 0;
          }

          &:last-child {
            transform: translateY(-8px) rotate(-45deg);
          }
        }
      }

      ul {
        display: flex;
        flex-direction: column;
        background-color: #222;
        padding: 10px;
      }
    }
  }
}

@media (max-width: 768px) {
  .menu {
    .toggle-btn {
      display: flex;
    }

    ul {
      display: none;
    }

    &.open {
      ul {
        display: flex;
      }
    }
  }
}
</style>
