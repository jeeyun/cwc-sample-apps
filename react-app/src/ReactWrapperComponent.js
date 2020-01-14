import React, { Component } from 'react';

export class ReactWrapperComponent extends Component {
    get _customPropsList() {
        return Object.keys(this.props).filter(prop => !this._propIsReservedReactProp(prop));
    }

    constructor(props, tagName) {
        super(props);
        this.tagName = tagName;
        this.ref = React.createRef();
    }

    componentDidMount() {
        this._customPropsList.forEach(prop => {
            if (this._propIsFunction(prop)) {
                this._createCustomElementEvent(prop);
            } else {
                this._updateCustomElementProperty(prop);
            }
        });
    }

    componentDidUpdate(prevProps) {
        this._customPropsList
            .filter(prop => !this._propIsFunction(prop) && prevProps[prop] !== this.props[prop])
            .forEach(prop => this._updateCustomElementProperty(prop));
    }

    render() {
        const CustomElementTag = `${this.tagName}`;
        return (
            <CustomElementTag ref={this.ref}>
                {this.props.children}
            </CustomElementTag>
        );
    }

    _propIsReservedReactProp(prop) {
        const reactProperties = ['children', 'localName', 'ref', 'style', 'className'];
        return reactProperties.indexOf(prop) !== -1;
    }

    _propIsFunction(prop) {
        return typeof this.props[prop] === 'function';
    }

    _createCustomElementEvent(prop) {
        let eventName = prop.substring(2);
        eventName = eventName.charAt(0).toLowerCase() + eventName.slice(1);
        this.ref.current.addEventListener(eventName, e => this.props[prop](e));
    }

    _updateCustomElementProperty(prop) {
        this.ref.current[prop] = this.props[prop];

        // if prop value is a string we assume to set the attribute on custom element
        if (typeof this.props[prop] === 'string') {
            this.ref.current.setAttribute(prop, this.props[prop]);
        }
    }
}

export class ClrReactButton extends ReactWrapperComponent {
    constructor(props) { super(props, 'cwc-button') }
}