
	import { render } from 'react-dom'
	import Example from './example'
	import { DndProvider } from 'react-dnd'
	import { HTML5Backend } from 'react-dnd-html5-backend'
	import logo from './logo.png'
  
	function App() {
		return (
			<div className="App">
        <h1>
         	<img src={logo} className='logo'/>
        </h1>
				<DndProvider backend={HTML5Backend}>
					<Example />
				</DndProvider>
			</div>
		)
	}

	const rootElement = document.getElementById('root')
	render(<App />, rootElement)
