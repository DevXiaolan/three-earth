const render = () => {
  console.log('Render');
  return Promise.resolve();
}
(global => {
  global['three-earth'] = {
    bootstrap: () => {
      console.log('three-earth bootstrap');
      return Promise.resolve();
    },
    mount: () => {
      console.log('three-earth mount');
      return render();
    },
    unmount: () => {
      console.log('three-earth unmount');
      return Promise.resolve();
    },
  };
})(window);