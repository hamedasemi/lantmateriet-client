import { html, PolymerElement } from '../../../node_modules/@polymer/polymer/polymer-element.js';

export default class AppMap extends PolymerElement {

    static get template() {
        return html`
            <style include="shared-style">

                :host {
                    display: block;
                    grid-area: map;
                    width: 100%;
                    height: 100%;
                }

            </style>

            <svg viewBox="0 0 230 100" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <pattern id="star" viewBox="0,0,10,10" width=".1px" height=".1px">
                        <polygon points="0,0 2,5 0,10 5,8 10,10 8,5 10,0 5,2"/>
                    </pattern>
                    <pattern id="star2" viewBox="0 0 100 100" width=".1px" height=".1px">
                        <g id="bubbles" fill="#000000">
                            <path d="M11,18 C14.8659932,18 18,14.8659932 18,11 C18,7.13400675 14.8659932,4 11,4 C7.13400675,4 4,7.13400675 4,11 C4,14.8659932 7.13400675,18 11,18 Z M59,43 C62.8659932,43 66,39.8659932 66,36 C66,32.1340068 62.8659932,29 59,29 C55.1340068,29 52,32.1340068 52,36 C52,39.8659932 55.1340068,43 59,43 Z M16,36 C17.6568542,36 19,34.6568542 19,33 C19,31.3431458 17.6568542,30 16,30 C14.3431458,30 13,31.3431458 13,33 C13,34.6568542 14.3431458,36 16,36 Z M79,67 C80.6568542,67 82,65.6568542 82,64 C82,62.3431458 80.6568542,61 79,61 C77.3431458,61 76,62.3431458 76,64 C76,65.6568542 77.3431458,67 79,67 Z M34,90 C35.6568542,90 37,88.6568542 37,87 C37,85.3431458 35.6568542,84 34,84 C32.3431458,84 31,85.3431458 31,87 C31,88.6568542 32.3431458,90 34,90 Z M90,14 C91.6568542,14 93,12.6568542 93,11 C93,9.34314575 91.6568542,8 90,8 C88.3431458,8 87,9.34314575 87,11 C87,12.6568542 88.3431458,14 90,14 Z M12,86 C14.209139,86 16,84.209139 16,82 C16,79.790861 14.209139,78 12,78 C9.790861,78 8,79.790861 8,82 C8,84.209139 9.790861,86 12,86 Z M40,21 C42.209139,21 44,19.209139 44,17 C44,14.790861 42.209139,13 40,13 C37.790861,13 36,14.790861 36,17 C36,19.209139 37.790861,21 40,21 Z M63,10 C65.7614237,10 68,7.76142375 68,5 C68,2.23857625 65.7614237,0 63,0 C60.2385763,0 58,2.23857625 58,5 C58,7.76142375 60.2385763,10 63,10 Z M57,70 C59.209139,70 61,68.209139 61,66 C61,63.790861 59.209139,62 57,62 C54.790861,62 53,63.790861 53,66 C53,68.209139 54.790861,70 57,70 Z M86,92 C88.7614237,92 91,89.7614237 91,87 C91,84.2385763 88.7614237,82 86,82 C83.2385763,82 81,84.2385763 81,87 C81,89.7614237 83.2385763,92 86,92 Z M32,63 C34.7614237,63 37,60.7614237 37,58 C37,55.2385763 34.7614237,53 32,53 C29.2385763,53 27,55.2385763 27,58 C27,60.7614237 29.2385763,63 32,63 Z M89,50 C91.7614237,50 94,47.7614237 94,45 C94,42.2385763 91.7614237,40 89,40 C86.2385763,40 84,42.2385763 84,45 C84,47.7614237 86.2385763,50 89,50 Z M80,29 C81.1045695,29 82,28.1045695 82,27 C82,25.8954305 81.1045695,25 80,25 C78.8954305,25 78,25.8954305 78,27 C78,28.1045695 78.8954305,29 80,29 Z M60,91 C61.1045695,91 62,90.1045695 62,89 C62,87.8954305 61.1045695,87 60,87 C58.8954305,87 58,87.8954305 58,89 C58,90.1045695 58.8954305,91 60,91 Z M35,41 C36.1045695,41 37,40.1045695 37,39 C37,37.8954305 36.1045695,37 35,37 C33.8954305,37 33,37.8954305 33,39 C33,40.1045695 33.8954305,41 35,41 Z M12,60 C13.1045695,60 14,59.1045695 14,58 C14,56.8954305 13.1045695,56 12,56 C10.8954305,56 10,56.8954305 10,58 C10,59.1045695 10.8954305,60 12,60 Z" id="Combined-Shape"></path>
                        </g>
                    </pattern>
                </defs>
            </svg>

            <slot></slot>
        `
    }

    ready() {
        super.ready()



        var map = L.map(this).setView([63, 18], 5)

        L.tileLayer('http://{s}.tiles.wmflabs.org/bw-mapnik/{z}/{x}/{y}.png', { maxZoom: 18 }).addTo(map)

        fetch('./lantmateriet-map/core/map/municipalities.json')
            .then((resp) => { return resp.json() })
            .then((data) => {
                let geojson = L.geoJSON(data, {
                    style: (feature) => {
                        return {
                            fillColor: (() => {
                                if (/^01/.test(feature.properties.description)) { return "red" }
                                if (/^10/.test(feature.properties.description)) { return "CornflowerBlue" }
                                if (/^11/.test(feature.properties.description)) { return "Chartreuse" }
                                if (/^12/.test(feature.properties.description)) { return "Crimson" }
                                if (/^13/.test(feature.properties.description)) { return "DarkOrange" }
                                if (/^14/.test(feature.properties.description)) { return "Cyan" }
                                if (/^15/.test(feature.properties.description)) { return "DarkBlue" }
                                if (/^16/.test(feature.properties.description)) { return "DarkSlateBlue" }
                                if (/^17/.test(feature.properties.description)) { return "GoldenRod" }
                                if (/^18/.test(feature.properties.description)) { return "Yellow" }
                                if (/^19/.test(feature.properties.description)) { return "GreenYellow" }
                                if (/^20/.test(feature.properties.description)) { return "Orange" }
                                if (/^05/.test(feature.properties.description)) { return "blue" }
                                if (/^03/.test(feature.properties.description)) { return "violet" }
                                if (/^04/.test(feature.properties.description)) { return "pink" }
                                if (/^05/.test(feature.properties.description)) { return "purple" }
                                if (/^06/.test(feature.properties.description)) { return "deeppink" }
                                if (/^07/.test(feature.properties.description)) { return "gold" }
                                if (/^08/.test(feature.properties.description)) { return "tomato" }
                                if (/^09/.test(feature.properties.description)) { return "green" }
                                else { return "gray" }
                            })(),
                            weight: 2,
                            opacity: 1,
                            // fillColor: 'url(#star)',
                            color: 'white',
                            dashArray: '3',
                            fillOpacity: 0.5
                        }
                    },
                    onEachFeature: (feature, layer) => {
                        layer.bindPopup(feature.properties.Name)
                        layer.on({
                            mouseover: (e) => {
                                e.target.setStyle({
                                    weight: 2,
                                    color: '#000',
                                    dashArray: '3',
                                    fillOpacity: 0.7
                                })
                                e.target.bringToFront()
                            },
                            mouseout: (e) => { geojson.resetStyle(e.target) },
                            click: (e) => { map.fitBounds(e.target.getBounds()) }
                        });
                    }
                }).addTo(map)
            })




        window.dispatchEvent(new Event('resize'))

    }

    static get properties() {
        return {}
    }
}

window.customElements.define('app-map', AppMap)
