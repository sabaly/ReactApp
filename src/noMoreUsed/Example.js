import React, { useState, useEffect } from 'react';

function Example() {
  // Déclaration d'une nouvelle variable d'état, que l'on appellera “count”
  const [count, setCount] = useState(0);
    // Équivalent à componentDidMount plus componentDidUpdate :
    useEffect(() => {
        // Mettre à jour le titre du document en utilisant l'API du navigateur
        document.title = `Vous avez cliqué ${count} fois`;
    });

  return (
    <div>
      <p>Vous avez cliqué {count} fois</p>
      <button onClick={() => setCount(count + 1)}>
        Cliquez ici
      </button>
    </div>
  );
}

export default Example;
