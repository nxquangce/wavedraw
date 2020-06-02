import { Component, Vue } from 'vue-property-decorator';

@Component
export class LineWidthSelectTs extends Vue {
    selectedValue = 1;
    showOptions = false;
    values = [1, 2, 3];

    select(value: number) {
        this.selectedValue = value;
        this.showOptions = false;
    }

    toggleShowOptions() {
        this.showOptions = !this.showOptions;
    }
}