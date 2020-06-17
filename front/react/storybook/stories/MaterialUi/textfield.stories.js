import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

export default {
  title: 'MaterialUi/TextField',
};

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export const Multiline = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState("Polycomb group (PcG) protein. Catalytic subunit of the PRC2/EED-EZH2 complex, which methylates 'Lys-9' (H3K9me) and 'Lys-27' (H3K27me) of histone H3, leading to transcriptional repression of the affected target gene. Able to mono-, di- and trimethylate 'Lys-27' of histone H3 to form H3K27me1, H3K27me2 and H3K27me3, respectively. Displays a preference for substrates with less methylation, loses activity when progressively more methyl groups are incorporated into H3K27, H3K27me0 > H3K27me1 > H3K27me2 (PubMed:22323599, PubMed:30923826). Compared to EZH1-containing complexes, it is more abundant in embryonic stem cells and plays a major role in forming H3K27me3, which is required for embryonic stem cell identity and proper differentiation. The PRC2/EED-EZH2 complex may also serve as a recruiting platform for DNA methyltransferases, thereby linking two epigenetic repression systems. Genes repressed by the PRC2/EED-EZH2 complex include HOXC8, HOXA9, MYT1, CDKN2A and retinoic acid target genes. EZH2 can also methylate non-histone proteins such as the transcription factor GATA4 and the nuclear receptor RORA. Regulates the circadian clock via histone methylation at the promoter of the circadian genes. Essential for the CRY1/2-mediated repression of the transcriptional activation of PER1/2 by the CLOCK-ARNTL/BMAL1 heterodimer; involved in the di and trimethylation of 'Lys-27' of histone H3 on PER1/2 promoters which is necessary for the CRY1/2 proteins to inhibit transcription.");

  const handleChange = event => {
    setValue(event.target.value);
  };

  return (
    <div>
      <TextField
        multiline
        rows="8"
        value={value}
        variant="filled"
        onChange={handleChange}
      />
    </div>
  );
}
