import React, { Component } from "react";

class ReasonExpressionInput extends Component {
  onChange = event => {
    this.props.onChange(event.target.value);
  };

  render() {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center"
        }}
      >
        <input
          autoComplete="off"
          autoCorrect="off"
          autoCapitalize="off"
          spellCheck="false"
          value={this.props.code}
          onChange={this.onChange}
        />
        {this.props.error && (
          <svg
            style={{ margin: "0 10px 10px" }}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M0 0h24v24H0z" fill="none" />
            <path
              fill="red"
              d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"
            />
          </svg>
        )}
      </div>
    );
  }
}

export default ReasonExpressionInput;