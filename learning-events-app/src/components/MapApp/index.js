import { YMaps, Map as Ymap, Clusterer, Placemark } from 'react-yandex-maps';
import { React, useCallback, useState } from 'react';
import * as ST from './styled';
import Events from '../../data/Events';
const MapApp = () => {

    const getPointOptions = () => {
        return {
            preset:
                'islands#circleDotIcon'
        };
    };

    const points = Events();

    return (
        <YMaps>
            <ST.MapHolder>
                <Ymap query={{
                    ns: "use-load-option",
                    apikey: "f06a2208-a0e9-4099-b3dd-17794ced86d9",
                    load: "загружаемые модули"
                }} width='100%' height='calc(100vh - 3rem)' defaultState={{ center: [55.75, 37.57], zoom: 9 }}
                    onClick={e => console.log(e.get('coord'))}>
                    {points.map((point) => <Placemark key={point.id} geometry={
                        point.GEO}
                        options={getPointOptions()}
                    />)}
                </Ymap>
            </ST.MapHolder>
        </YMaps>
    )
}

export default MapApp