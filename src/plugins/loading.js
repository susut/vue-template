import loading from '@src/components/loading';

let LoadingPlugin = {};
LoadingPlugin.install = (Vue, options = {}) => {
    let Loading = Vue.extend(loading);
    let loadingInstance = new Loading().$mount(document.createElement('div'));
    document.body.appendChild(loadingInstance.$el);
    let timer = null;
    Vue.prototype.$loading = {
        show(timeout = 5000) {
            clearTimeout(timer);
            loadingInstance.showLoading = true;
            setTimeout(() => {
                loadingInstance.showLoading = false;
            }, timeout);
        },
        hide() {
            loadingInstance.showLoading = false;
            clearTimeout(timer);
        }
    }
};
export default LoadingPlugin;