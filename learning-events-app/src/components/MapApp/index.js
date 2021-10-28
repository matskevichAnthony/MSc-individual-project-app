import { YMaps, Map as Ymap, Clusterer, Placemark } from 'react-yandex-maps';
import { useCallback, useState } from 'react';
import * as ST from './styled';
import locations from '../../data/locations';
const MapApp = () => {
    const points = locations();
    const getPointOptions = () => {
        return {
            preset: 'islands#violetIcon'
        };
    };

    return (
        <YMaps>
            <ST.MapHolder>
                <Ymap width='100%' height='calc(100vh - 3rem)' defaultState={{ center: [55.75, 37.57], zoom: 9 }}
                    onClick={e => console.log(e.get('coord'))}>
                    {points.map((point) => <Placemark key={point.id} geometry={
                        point.coordinates}
                        options={getPointOptions()}
                    />)}
                </Ymap>
            </ST.MapHolder>

        </YMaps>

    )
}




export default MapApp;