//
// This is only a SKELETON file for the 'RNA Transcription' exercise. It's been provided as a
// convenience to get you started writing code faster.
//
export const toRna = (dna) => {
  // throw new Error('Remove this line and implement the function');
  const dnaToRna = {
    G : 'C',
    C : 'G',
    T : 'A',
    A : 'U'
  }

  if(dna == '') return '';
  return dna.split('').map(function(nucleotide) {
  return dnaToRna[nucleotide];
}).join('')
};
