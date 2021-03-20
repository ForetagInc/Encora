import React from 'react';
import { Text, View, Image, Platform } from 'react-native';
import Constants from 'expo-constants';
import { StatusBar } from 'expo-status-bar';
import { useTailwind, Div } from './tailwind/index';

const App = () => {

	const { tailwind } = useTailwind();

	// return(
	// 	<>
	// 		<StatusBar style='dark' backgroundColor='skyblue' />
	// 		<Div className='mt-6'>
	// 			<Div
	// 				className='p-5 m-4 inline-flex space-x-4 bg-indigo-300 bg-stripes bg-stripes-white rounded-md hover:bg-gray-800'
	// 			>
	// 				<Text style={ tailwind('flex-1 rounded-md text-white font-italic text-center bg-indigo-500 px-6 py-4') }>Text</Text>
	// 			</Div>
	// 		</Div>
	// 	</>
	// )


	// return (
	// 	<Div className='p-4 inline-flex space-x-4 bg-indigo-300 bg-stripes bg-stripes-white rounded-md'>
	// 		<Text style={ tailwind('flex-1 rounded-md text-white font-extrabold text-center bg-indigo-500 px-6 py-4') }>1</Text>
	// 		<Text style={ tailwind('flex-1 rounded-md text-white font-extrabold text-center bg-indigo-500 px-6 py-4') }>2</Text>
	// 		<Text style={ tailwind('flex-1 rounded-md text-white font-extrabold text-center bg-indigo-500 px-6 py-4') }>3</Text>
	// 	</Div>
	// );

	return (
		<>
			<StatusBar backgroundColor='#1f2937' style='light' />
			<Div className='bg-gray-800 mt-4 md:mt-0'>
				<Div className='block max-w-7xl mx-auto px-2 sm:px-6 lg:px-8'>
					<Div className='relative flex max-w-7xl items-center justify-between h-16'>
						<Div className='absolute inset-y-0 left-0 flex items-center sm:hidden'>
							<Div className='inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white'>
								<Text style={ tailwind('sr-only') }>Open main menu</Text>
							</Div>
						</Div>
						<View style={ tailwind('flex-1 flex items-center justify-center sm:items-stretch sm:justify-start') }>
							<View style={ tailwind('flex-shrink-0 flex items-center') }>
								<Image style={ tailwind('block lg:hidden h-8 w-auto') } source={{ uri: "https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg" }} />
								<Image style={ tailwind('hidden lg:block h-8 w-auto') } source={{ uri: "https://tailwindui.com/img/logos/workflow-logo-indigo-500-mark-white-text.svg" }} />
							</View>
							<View style={ tailwind('hidden sm:block sm:ml-6') }>
								<View style={ tailwind('flex space-x-4') }>
									<Text style={ tailwind('bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium cursor-pointer') }>Dashboard</Text>
									<Text style={ tailwind('text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium') }>Team</Text>
									<Text style={ tailwind('text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium') }>Projects</Text>
									<Text style={ tailwind('text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium') }>Calendar</Text>
								</View>
							</View>
						</View>
						<View style={ tailwind('absolute right-0') }>
							<View style={ tailwind('flex inset-y-0 right-0 items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0') }>

								<View style={ tailwind('bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white') }>
									<Text style={ tailwind('sr-only') }>View notifications</Text>
								</View>

								<View style={ tailwind('block ml-3 relative') }>
									<View>
										<View style={ tailwind('bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white') }>
											<Text style={ tailwind('sr-only') }>Open user menu</Text>
											<Image
												style={ tailwind('h-8 w-8 rounded-full') }
												source={{ uri: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" }}
											/>
										</View>
									</View>

									<View style={ tailwind('absolute') }>
										<View style={ tailwind('hidden origin-top-right right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5') }>
											<Text style={ tailwind('block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100') }>Your Profile</Text>
											<Text style={ tailwind('block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100') }>Settings</Text>
											<Text style={ tailwind('block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100') }>Sign out</Text>
										</View>
									</View>
								</View>
							</View>
						</View>
					</Div>
				</Div>

				<View style={ tailwind('block md:hidden') }>
					<View style={ tailwind('px-2 pt-2 pb-3 space-y-1') }>
						<Text style={ tailwind('bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium') }>Dashboard</Text>
						<Text style={ tailwind('text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium') }>Team</Text>
						<Text style={ tailwind('text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium') }>Projects</Text>
						<Text style={ tailwind('text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium') }>Calendar</Text>
					</View>
				</View>
			</Div>
		</>
	)

	// return (
	// 	<Div className='max-w-md mx-auto bg-white hover:bg-gray-500 rounded-xl shadow-md overflow-hidden md:max-w-2xl'>
	// 		<Div className='flex'>
	// 			<Div className='md:flex-shrink-0'>
	// 				<Image
	// 					source={{ uri: 'https://images.unsplash.com/photo-1515711660811-48832a4c6f69?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=448&q=80' }}
	// 					style={ tailwind('h-48 w-full object-cover md:w-48') }
	// 				/>
	// 			</Div>

	// 			<Div className='p-8'>
	// 				<Text style={ tailwind('uppercase tracking-wide text-sm text-indigo-500 font-semibold') }>Case study</Text>
	// 				<Text style={ tailwind('block mt-1 text-lg leading-tight font-medium text-black hover:underline') }>Finding customers for your new business</Text>
	// 				<Text style={ tailwind('mt-2 text-gray-500') }>
	// 					Getting a new business off the ground is a lot of hard work. Here are five ideas you can use
	// 					to find your first customers.
	// 				</Text>
	// 			</Div>
	// 		</Div>
	// 	</Div>
	// )
}


App.displayName = 'App';

export default App;
