export interface IBreakpointConfig {
	name: string
	active: boolean
}

export interface IScreenConfig {
	[index: string]: { min: number }
}

export interface IStyles {
	[index: string]: { [key: string]: string | number }
}

export interface IStyle {
	[index: string]: string | number
}

export type TElementState =  null | 'hover' | 'active' | 'focus';
