<header class="banner">
  <div class="container flex items-center justify-between
              sm-only:pr-0
              h-16 md:h-24">
    <a class="brand flex" href="{{ home_url('/') }}" alt="Home">
      @svg('logo-mobile', 'md:hidden')
      @svg('images.logos.oelatam', 'nav-logo')
    </a>
    <nav role="navigation"
         class="nav-primary
                hidden md:block">
      @include('partials.navigation')
    </nav>
    <button class="js-toggle-menu toggle-menu flex md:hidden self-start">@svg('menu', 'menu')</button>
  </div>
</header>
