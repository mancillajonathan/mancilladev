import React from 'react';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import './App.css';
import Layout from './components/Layout';
import Home from './pages/Home';
import Aboutme from './pages/Aboutme';
import Portfolio from './pages/Portfolio';
import Resume from './pages/Resume';
import NotFound from './pages/NotFound';

function App() {
	return (
		<BrowserRouter>
			<Layout>
				<Switch>
					<Route exact path='/' component={Home} />
					<Route exact path='/about-me' component={Aboutme} />
					<Route exact path='/portfolio' component={Portfolio} />
					<Route exact path='/resume' component={Resume} />
					<Route exact path='/404' component={NotFound} />
					<Redirect from='*' to='/404' />
				</Switch>
			</Layout>
		</BrowserRouter>
	);
}

export default App;
