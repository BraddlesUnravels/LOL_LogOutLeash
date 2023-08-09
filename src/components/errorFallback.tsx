import React from 'react';

export default function ErrorFallback({ error, resetErrorBoundary }: any ) {
	return (
		<div role="alert">
			<p>Opps you broke it -_-, take a look at the error message:</p>
			<pre>{ error.message }</pre>
			<button onClick={ resetErrorBoundary }>Try again</button>
		</div>
	);
}