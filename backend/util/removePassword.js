export default function removePassword(rows){
  return rows.map(row => {
    const { password, ...exceptPassword } = row;
    return exceptPassword;
})
}