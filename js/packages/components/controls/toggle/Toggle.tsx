import React from 'react'

import { useThemeColor } from '@berty/store'

import { ToggleProps } from './interfaces'
import { TogglePriv } from './Toggle.priv'

export const Toggle: React.FC<ToggleProps> = props => {
	const colors = useThemeColor()

	return (
		<TogglePriv
			checked={props.checked}
			onChange={props.onChange}
			styleColors={{
				circleBackground: 'white',
				toggleBackgroundInactive: '#EDF0F3',
				toggleBackgroundActive: colors['background-header'],
			}}
		/>
	)
}