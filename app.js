window.addEventListener( 'DOMContentLoaded', init );
const mathObjects = ['!', '!', '!', '/', '9', '8', '7', "*", '6', '5', '4', '-', '3', '2', '1','+','0', '.'];
const spec = ['*', '/', '-', '+']

function init () {
  document.title="Calculator JavaScript"
  console.log( "ready" )
  let dec = false;
  let eva = false; 
  // =====================================Start Create container=============================================
  const container = document.createElement( 'div' );
  container.classList.add( 'container' );
  // =====================================End Create container=============================================
  document.body.appendChild( container );
  // =====================================Start Create output=============================================
  const output = document.createElement( 'input' );
  output.setAttribute( 'type', 'text' );
  output.classList.add( 'output' );
  // =====================================End Create output=============================================
  container.appendChild( output );
  // =====================================Start Create main=============================================
  const main = document.createElement( 'div' );
  main.classList.add( "main" );
  // =====================================Start Create main=============================================
  container.appendChild( main );

  mathObjects.forEach( ( ele ) => {
    btnMarker(ele,addOutput)
  } )
  btnMarker( "=", evalOutput );
  btnMarker( "C", clrOutput );
  function colorOutput ( v ) {
    output.style.border = v + ' 1px solid';
    output.style.color = v;
  }
  function evalOutput () {
    output.style.border  = "black 1px solid"
    if ( output.value === "" ) {
      colorOutput("red")
    } else if ( eva ) {
      colorOutput("red")
    }else {
      output.value = eval( output.value)
    }
    dec = output.value.includes( '.' ); 
  }
  function clrOutput () {
    colorOutput("black")
    output.value = "";
  }
  function addOutput ( object ) {
    colorOutput("black")
    let ele = object.target.value;
    if ( ele == '.' ) {
      if ( dec ) {
        ele = "";
        colorOutput("red")
      } else {
        dec =true
      }
    }
    eva =spec.includes( ele )
    if (eva) {
      dec = false;
    }
    output.value += ele
  }
  function btnMarker (txt, myFunction ) {
    let btn = document.createElement( 'button' );
    btn.setAttribute( 'type', 'buttom' );
    btn.style.width = '23%';
    btn.style.lineHeight = '50px';
    btn.style.margin = '1%';
    btn.style.fontSize = '2em';
    btn.value = txt;
    btn.textContent = txt;
    btn.addEventListener( 'click', myFunction );
    main.appendChild(btn)
  }
}

