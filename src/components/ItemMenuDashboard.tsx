interface IDashboardProps {
  title: string;
  src: string;
}

export function ItemMenuDashboard({ title, src }: IDashboardProps) {
  return (
    <iframe
      style={{ position: 'absolute', height: '90%', border: 'none' }}
      title={title}
      width="96.5%"
      src={src}
      allowFullScreen={true}
    ></iframe>
  );
}
