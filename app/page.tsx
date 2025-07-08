export default function Home() {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif', backgroundColor: '#f0f8ff' }}>
      <h1 style={{ color: '#ff6b6b' }}>ランディングページ</h1>
      <p>こちらはB社が制作管理するランディングページサンプルです。</p>
      <p>プロキシ経由で /lp/ パスから正常にアクセスされています</p>
      <div style={{ marginTop: '20px', padding: '15px', backgroundColor: '#e6f3ff', borderRadius: '5px' }}>
        <p>このページは異なるリポジトリから管理され、同一ドメインで表示されています。</p>
      </div>
    </div>
  )
}