import Component from "../Component.js";
import Header from "../common/Header.js";
import "./CatFormApp.css";

class CatFormApp extends Component {
  render() {
    return (
      <div>
        <Header title="Add a Cat" />
        <main>
          <p>Cat Form Page</p>
        </main>
      </div>
    );
  }
}

export default CatFormApp;
