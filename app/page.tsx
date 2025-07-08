export default function Home() {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif', backgroundColor: '#f0f8ff' }}>
      <h1 style={{ color: '#ff6b6b' }}>ランディングページ</h1>
      <p>こちらは別会社が管理するランディングページです。</p>
      <p>プロキシ経由で /lp/ パスから正常にアクセスされています！</p>
      <div style={{ marginTop: '20px', padding: '15px', backgroundColor: '#e6f3ff', borderRadius: '5px' }}>
        <h3 style={{ color: '#0066cc', marginTop: '0' }}>サービス紹介</h3>
        <p>このページは異なるリポジトリから管理され、同一ドメインで表示されています。</p>
      </div>
    </div>
  )
}