import React, { Component } from 'react'
import { connect } from 'react-redux'
import store from '../store'
import * as action from '../actions'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: 'Hello World'
    }
  }

  componentDidMount() {
    this.props.dispatch(action.displayHello("Hello Super Hero!"));
    var str = "29207";
    var output_palindrome = this.longestPalindrome(str);
  }

  longestPalindrome(str) {
    var len = str.length;
    var max_length = 0, longest_palindrome = '';
    for(var i = 0; i < len; i++) {
      var sub_string = str.substr(i, len);
      for(var j = sub_string.length; j >= 0; j--) {
        var sub_string_of_sub_string = sub_string.substr(0, j);
        if(sub_string_of_sub_string.length <= 1) {
          continue;
        }

        if(this.isPalindrome(sub_string_of_sub_string)) {
          if(sub_string_of_sub_string.length > max_length) {
            max_length = sub_string_of_sub_string.length;
            longest_palindrome = sub_string_of_sub_string;
            if(this.isPrimeNumber(max_length)) {
              console.log("YES");
            }
            else {
              console.log("NO");
            }
          }
        }
      }
    }

    return longest_palindrome;
  }

  isPalindrome(str) {
    return str.split("").reverse().join("") == str;
  }

  isPrimeNumber(num) {
    for(var i = 2; i < num; i++) {
      if(num % i === 0) {
        return false;
      }
    }
    return num > 1;
  }

  exists(needle, data) {
    for (var i=0; i < data.length; i++) {
      if(needle == data[i]) {
        return needle;
      }
    }

    return false;
  }

  render() {
    const { data } = this.props
    return (
      <div>{data.title}</div>
    );
  }
}

const mapStateToProps = ({ rootState }) => {
  return { data: rootState }
}

export default connect(mapStateToProps, null)(App)

