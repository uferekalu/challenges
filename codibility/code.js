// `, or `<select>`) is controlled by the component's state.
//    - To create a controlled component, you need to set the value of the input element to a state variable and provide an `onChange` event handler to update the state whenever the input changes.
//    - Here's an example of a controlled component:

// <pre  class="147"><code class="147"></code></pre>

// `, or `<select>`) whose value is not directly controlled by React's state. Instead, the value of the input element is handled by the DOM itself.

// In an uncontrolled component, you can retrieve the value of the input element using a ref, but React doesn't track or update the value for you. This means that any changes to the input value are not automatically reflected in React's state or trigger a re-render of the component.

// Uncontrolled components are useful in situations where you don't need to perform additional logic or validation on the input value, and you want to handle the form data directly from the DOM, such as when using third-party libraries or when dealing with large forms with many input fields.

// To use an uncontrolled component, you simply render the input element without setting its value prop or providing an `onChange` event handler. The value of the input element will be handled by the DOM, and you can retrieve it using a ref or by accessing the DOM element directly.