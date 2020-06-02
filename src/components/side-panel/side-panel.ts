import Vue from 'vue'
import Component from 'vue-class-component'
import LineWidthSelect from "../line-width-select/line-width-select.vue";

@Component({
    name: 'SidePanel',
    components: {
        "LineWidthSelect": Vue.extend(LineWidthSelect)
    }
})
export class SidePanelTs extends Vue {
}