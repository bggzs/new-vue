import Vue from 'vue'

const requireContext=require.context(
    './global',
    true,
    /\.vue$/
)
requireContext.keys().forEach(filename=>{
    const componentsConfig=requireContext(filename);
    Vue.component(
        componentsConfig.default.name || componentsConfig.name,
        componentsConfig.default || componentsConfig
    )
})