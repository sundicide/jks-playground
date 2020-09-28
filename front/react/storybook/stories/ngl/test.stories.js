import React from 'react';
import MaterialTable from "material-table";
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import * as NGL from "ngl";

export default {
  title: 'Ngl/Test',
};

const useStyles = makeStyles((theme) => ({
  viewport: {
    height: "500px",
    width: "500px"
  }
}));


export const SimpleAction = () => {
  const classes = useStyles();
  const [stage, setStage] = React.useState(null);
  // NGL.DatasourceRegistry.add("data", new NGL.StaticDatasource("../data/"))

  React.useEffect(() => {
    let tempStage = new NGL.Stage("viewport");
    setStage(tempStage);
  }, []);

  console.log("NGL", NGL);
  /**
  var load = NGL.getQuery("load")
  if (load) stage.loadFile(load, {defaultRepresentation: true})

  */
 const drawPdb = () => {
    stage.loadFile( "rcsb://3pqr" ).then( function( o ){
    // get all atoms within 5 Angstrom of retinal
    var selection = new NGL.Selection( "RET" );
    var radius = 5;
    var atomSet = o.structure.getAtomSetWithinSelection( selection, radius );
    // expand selection to complete groups
    var atomSet2 = o.structure.getAtomSetWithinGroup( atomSet );
    o.addRepresentation( "licorice", { sele: atomSet2.toSeleString() } );
    o.addRepresentation( "cartoon" );
    o.autoView();
  });
 }

 const resetPdb = () => {
   if (stage !== null) {
     stage.removeAllComponents();
     setStage(null);
   }
 }

  return (
    <div>
      <div id="viewport" className={classes.viewport}></div>
      <div>
        <Button onClick={() => drawPdb()}>Draw</Button>
        <Button onClick={() => resetPdb()}>Reset</Button>
      </div>
    </div>
  )
}
