import { Component, Vue } from 'vue-property-decorator';
import { SVG, Svg, G } from '@svgdotjs/svg.js';
import { WaveDrawing as Wave, EdgeType } from '@/lib/wave-drawing';

@Component
export class WaveImageTs extends Vue {

    scale = 1;

    colors = ['#E0FEFE', '#C7CEEA', '#FFDAC1', '#FF9AA2', '#FFFFD8', '#B5EAD7', '#CCCCCC', '#FFFFFF', 'x', '#AA2822', '#D4342D', '#F3DDAC', '#E7BF71', '#C09645',
        '#B8860B', '#FFD700', '#019000', '#2AAF2D', '#81EE96'
    ];

    mounted() {
        console.log('wave image created')
        const wave = SVG().addTo('#wave-space').size(1000, 768);
        wave.viewbox(0, 0, 1000, 768);
        let group: any[] = [];
        for (let i = 0; i < 9; i++) {
            group[i] = wave.group();
        }

        for (let j = 0; j < 16; j++) {
            Wave.baseLine(group[0], j * 2 * Wave.baseWidth, 0, 7);
            Wave.posClockIdeal(group[1], 2 * j * Wave.baseWidth, 0, true);
            Wave.negClockIdeal(group[2], 2 * j * Wave.baseWidth, Wave.baseHeight + Wave.linePadding, true);
            Wave.posClock(group[3], 2 * j * Wave.baseWidth, 2 * (Wave.baseHeight + Wave.linePadding), true);
            Wave.negClock(group[4], 2 * j * Wave.baseWidth, 3 * (Wave.baseHeight + Wave.linePadding), true);

            if (j > 0 && j < 3)
                Wave.highCycle(group[5], 2 * j * Wave.baseWidth, 4 * (Wave.baseHeight + Wave.linePadding));
            else if (j == 4)
                Wave.gapTransitHighCycle(group[5], 2 * j * Wave.baseWidth, 4 * (Wave.baseHeight + Wave.linePadding), '#ffffff')
            else if (j == 7)
                Wave.gapTransitLowCycle(group[5], 2 * j * Wave.baseWidth, 4 * (Wave.baseHeight + Wave.linePadding), '#ffffff')
            else if (j > 6)
                Wave.lowCycle(group[5], 2 * j * Wave.baseWidth, 4 * (Wave.baseHeight + Wave.linePadding));
            else if (j % 2 == 0)
                Wave.transitHighCycle(group[5], 2 * j * Wave.baseWidth, 4 * (Wave.baseHeight + Wave.linePadding));
            else
                Wave.transitLowCycle(group[5], 2 * j * Wave.baseWidth, 4 * (Wave.baseHeight + Wave.linePadding));

            Wave.busCycle(group[6], 2 * j * Wave.baseWidth, 5 * (Wave.baseHeight + Wave.linePadding), this.colors[j], this.colors[j + 1], '0x' + j, 14);
            Wave.gapPosClock(group[7], 2 * j * Wave.baseWidth, 6 * (Wave.baseHeight + Wave.linePadding), true, '#ffffff');
            Wave.gapNegClock(group[8], 2 * j * Wave.baseWidth, 7 * (Wave.baseHeight + Wave.linePadding), true, '#ffffff');
        }

        const hoverBox = this.initHoverBox(wave);

        // Find your root SVG element
        var svg = document.querySelector('svg') as SVGSVGElement;
        // Create an SVGPoint for future math
        var pt = svg.createSVGPoint();
        // Get point in global SVG space
        function cursorPoint(evt: MouseEvent) {
            pt.x = evt.clientX; pt.y = evt.clientY;
            return pt.matrixTransform((svg.getScreenCTM() as DOMMatrix).inverse());
        }
        svg.addEventListener('mousemove', (evt) => {
            var loc = cursorPoint(evt);
            hoverBox.opacity(0.7);
            this.hover(hoverBox, loc.x, loc.y);
        }, false);

        svg.addEventListener('mouseout', (evt) => {
            hoverBox.opacity(0);
        }, false);

    }

    findGroup(x: number, y: number) {

    }

    initHoverBox(svg: Svg | G) {
        const boxX = 0;
        const boxY = 0;
        const adjH = 4;
        const box = boxX + ',' + (boxY - adjH) + ' '
            + (boxX + 2 * Wave.baseWidth) + ',' + (boxY - adjH) + ' '
            + (boxX + 2 * Wave.baseWidth) + ',' + (boxY + Wave.baseHeight + adjH) + ' '
            + boxX + ',' + (boxY + Wave.baseHeight + adjH);
        const group = svg.group();
        group.polygon(box).fill({ color: '#a8d1ff', opacity: 0.7 });
        group.opacity(0);
        return group;
    }

    hover(svg: Svg | G, x: number, y: number) {
        const adjH = 4;
        const boxX = parseInt((x / (2 * Wave.baseWidth)).toString()) * 2 * Wave.baseWidth;
        const boxY = parseInt((y / (Wave.baseHeight + Wave.linePadding)).toString()) * (Wave.baseHeight + Wave.linePadding);
        svg.move(boxX, boxY - adjH);
    }
}