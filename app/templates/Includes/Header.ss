<header>
    <v-base-button text="Toggle Nav" :on-click="toggleMainNav"></v-base-button>
    <v-main-nav :is-open="isMainNavOpen" :items="mainNavItems"></v-main-nav>
</header>
