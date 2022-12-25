export const state = () => ({
  showSidebar: false,
  currentPage: "Home",
});

export const mutations = {
  toggleSidebar(state) {
    state.showSidebar = !state.showSidebar;
  },
};
