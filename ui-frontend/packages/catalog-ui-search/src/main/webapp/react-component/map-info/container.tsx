/**
 * Copyright (c) Codice Foundation
 *
 * This is free software: you can redistribute it and/or modify it under the terms of the GNU Lesser
 * General Public License as published by the Free Software Foundation, either version 3 of the
 * License, or any later version.
 *
 * This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without
 * even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU
 * Lesser General Public License for more details. A copy of the GNU Lesser General Public License
 * is distributed along with this program and can be found at
 * <http://www.gnu.org/licenses/lgpl.html>.
 *
 **/
import * as React from 'react'
import withListenTo, { WithBackboneProps } from '../backbone-container'
import MapInfoPresentation from './presentation'
import { hot } from 'react-hot-loader'
import { Format, Attribute } from '.'
import { StartupDataStore } from '../../js/model/Startup/startup'
import { LayoutContext } from '../../component/golden-layout/visual-settings.provider'
import { getDefaultCoordinateFormat } from '../../component/visualization/settings-helpers'

type Props = {
  map: Backbone.Model
} & WithBackboneProps

const mapPropsToState = (props: Props) => {
  const { map } = props
  return {
    coordinates: {
      lat: map.get('mouseLat'),
      lon: map.get('mouseLon'),
    },
    attributes: getAttributes(map),
    measurementState: map.get('measurementState'),
    currentDistance: map.get('currentDistance'),
  }
}

const getAttributes = (map: Backbone.Model) => {
  if (map.get('targetMetacard') === undefined) {
    return []
  }
  return StartupDataStore.Configuration.getSummaryShow()
    .map((attribute: string) => {
      const value =
        map.get('targetMetacard').plain.metacard.properties[attribute]
      return { name: attribute, value }
    })
    .filter(({ value }: Attribute) => value !== undefined)
}

const MapInfo = (props: Props) => {
  const { getValue, onStateChanged, visualTitle } =
    React.useContext(LayoutContext)
  const [stateProps, setStateProps] = React.useState(mapPropsToState(props))
  const [coordFormat, setCoordFormat] = React.useState<Format>('degrees')

  const { listenTo, map } = props
  const coordFormatKey = `${visualTitle}-coordFormat`

  const onChange = () => setStateProps(mapPropsToState(props))

  React.useEffect(() => {
    setCoordFormat(getValue(coordFormatKey, getDefaultCoordinateFormat()))
    onStateChanged(() => {
      const coordFormat = getValue(coordFormatKey, getDefaultCoordinateFormat())
      setCoordFormat(coordFormat)
    })

    listenTo(
      map,
      'change:mouseLat change:mouseLon change:targetMetacard change:currentDistance',
      onChange
    )
  }, [])

  return <MapInfoPresentation {...stateProps} format={coordFormat} />
}

export default hot(module)(withListenTo(MapInfo))
