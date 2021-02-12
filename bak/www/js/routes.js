routes = [
  {
    path: '/',
    url: './index.html',
  },
  {
    path: '/startpage/',
    componentUrl: './pages/startpage.html',
  }, 
  {
    path: '/product-detail/',
    componentUrl: './pages/product-detail.html',
  }, 
  {
    path: '/my-cart/',
    componentUrl: './pages/my-cart.html',
  }, 
	
  // Default route (404 page). MUST BE THE LAST
  {
    path: '(.*)',
    url: './pages/404.html',
  },
];
