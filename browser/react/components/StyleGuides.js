import React from 'react';
import {Link} from 'react-router';

export default function StyleGuides (props) {
  

  const styleGuides = props.styleGuides;
  console.log(styleGuides);
  

  return (
    <div>
      <h3>Style Guides</h3>
      <div className="row">
        {
          styleGuides && styleGuides.map(styleGuide => (
            <div className="col-xs-4" key={ styleGuide.id }>             
                  <h5>
                    <span>{ styleGuide.name }</span>
                  </h5>
                  <p>
                    <span>{ styleGuide.backdrop }</span>
                  </p>                <p>
                    <span>{ styleGuide.captions }</span>
                  </p>                <p>
                    <span>{ styleGuide.titles }</span>
                  </p>
            </div>
          ))
        }
      </div>
    </div>
  );
};
