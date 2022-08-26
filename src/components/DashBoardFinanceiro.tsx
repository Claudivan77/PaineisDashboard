export function DashBoardFinanceiro() {
  return (
    <iframe
      style={{ position: 'absolute', height: '90%', border: 'none' }}
      title="Analise CMV - Comparacao"
      width="96.5%"
      src="https://app.powerbi.com/reportEmbed?reportId=a8b25f3d-0431-4dc5-8194-c36527be3f6b&autoAuth=true&ctid=a492ebf0-01aa-4c60-95b0-b5517b5127e1"
      allowFullScreen={true}
    ></iframe>
  );
}
