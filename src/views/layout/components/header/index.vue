<template>
  <div class="header_area">
    <div class="top-menu">
      <div class="container">
        <div class="top-menu-wrapper">
          <div class="call">
            Call Us: 012 44 5698 7456 896
          </div>
          <div class="link">
            <a href="">
              Login/Register
            </a>
            <a href="#">
              My Account
            </a>
            <a href="">
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </div>
    <div class="main-menu">
      <div class="container">
        <div class="main-menu-wrapper">
          <!--<div-->
          <!--@click="drawer = !drawer"-->
          <!--class="hidden-md-and-up"-->
          <!--&gt;</div>-->

          <a href="/" class="logo">
            <img src="../../../../../public/img/logo.png" alt="">
          </a>
          <div class="nav">
            <router-link
              v-for="link of links"
              :key="link. title"
              :to="link.url"
              class="nav-link"
            >
              <div
                class="nav-item"
                @mouseenter=" activeButton = link. title"
                @mouseleave="activeButton = ''"
              >
                {{link. title}}
                <transition name="fade-submenu">
                  <div v-if="activeButton === link. title" class="submenu">
                    <router-link
                      v-for="item of link.children"
                      :key="item. title"
                      :to="item.url"
                      class="nav-link-submenu"
                    >
                      {{ item. title }}
                    </router-link>
                  </div>
                </transition>

              </div>

            </router-link>
          </div>
          <div class="navbar-right">
            <button class="icons">
              <i class="fa fa-search" aria-hidden="true"></i>
            </button>
            <router-link
              :to="{ name: 'PersonalArea' }"
            >
              <button class="icons">
                <i class="fa fa-user" aria-hidden="true"></i>
              </button>
            </router-link>
            <button class="icons">
              <i class="fa fa-heart-o" aria-hidden="true"></i>
            </button>
            <button class="icons">
              <i class="fa fa-shopping-cart" aria-hidden="true"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      drawer: false,
      activeButton: '',
      links: [
        { title: 'Home', url: '/' },
        { title: 'Shop',
          url: '/shop',
          children: [
            { title: 'Shop Category', url: '/shop-category' },
            { title: 'Single Product Page', url: '/product-page' }
          ]
        },
        { title: 'Pages',
          url: '/pages',
          children: [
            { title: 'Tracking', url: '/tracking' },
            { title: 'Elements', url: '/elements' },
            { title: 'newPage', url: '/newPage' }
          ]
        }
      ]
    }
  }
}
</script>
<style lang="scss" src="./style.scss"></style>
