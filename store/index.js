export const state = () => ({
  showSidebar: false,
});

export const mutations = {
  toggleSidebar(state) {
    state.showSidebar = !state.showSidebar;
  },
};
