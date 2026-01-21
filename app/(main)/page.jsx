import HeroSection from '@/components/HeroSection';
import EventFilters from '@/components/EventFilters';
import EventCard from '@/components/EventCard';

export default function Home() {
  const events = [
    {
      imageSrc:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuDYs7cb55wfkS1nd-aSrO1a5Yk_1nKYdKQclALi_Bzfdev6Lk2Dm7YkRZC9GoJqsqI1D3RqEkHfvCoR4tDbVnkoT_Rp73HG1fy4GXioBRp4-D3uXvBLIXPtyR1fmJ3nJtdYSb1FSfgAvMjDx6IFLJQz7xKXzs2hvZh4DSGHL-EsNQZPEbGqTdAXJU0lo3IM96WyekQQ_Sltk3znByz74kn6AnTYapttDgIzBJsYC_TG_Kb58ZliFWMKkCZaq7585tsvQnaTmlYmZXQ',
      imageAlt: 'People attending a technology conference with stage lights',
      dateMonth: 'EKİM',
      dateDay: '24',
      category: 'Teknoloji',
      categoryColorClass: 'bg-blue-500',
      title: 'Yapay Zeka Zirvesi 2024',
      description:
        'Geleceğin teknolojilerini sektörün liderlerinden dinleyin. Networking fırsatlarını kaçırmayın.',
      location: 'Mühendislik Fakültesi, A Blok',
      attendees: [
        'https://lh3.googleusercontent.com/aida-public/AB6AXuDj_siKKbPLpGvbZgLMPSQLAFz-timymAKmbSHnqPStK8M3-r30hvqj579Mx-QbkjmtQMI2ao6lQifS8rLlto7MsASvBEajJrlP6RbH51svo5z02pRmnTOVRvenVf1QXrS5i99de_DdrlwSENtzlII8C9KJT7lYdPXOF0OLDORLHB7r6q8t2vvCnLy7EyGBwj_AYOmgEpHmrVqQwnuJ_zFqfChGofDZLMG4co4Wjg6RWMySo9KsdCIJ5s_peFEtDQIk8fPbxvzc8B8',
        'https://lh3.googleusercontent.com/aida-public/AB6AXuCceEy3-yWBXWqFvTO80bTtWUdvlllwZ3MbXUpq1ajEo-rhxaP4bTdcg2pudX3Bdn227hRCFP5SPV118JCrVptF4PuM-fEnTodJ0Xvk2y7lBZsldK_IFtzvy4K7KUPCe8lgdOHveL3X33TP1UoMQw98BFl98093sN6GSSFX8GxwtBepXT6X0YL0TVtVrf40ysZZxq-dxCXZcIe9coQM4MEuOx8Mq-29tw1MflgYS2WTaMuwhWQDD0a2lzOAS6pD4Ua7xmOJ1_x0gmE',
        'https://lh3.googleusercontent.com/aida-public/AB6AXuByCv01S1ERZDFjP6xknuH_0ys3R1BLjQmbcBy4h15JZIsvXc-N-gyULqI2K8UjYjka518c23H354id4tGYzPesar66SP2LqkbjoWkns3oAjzVbpkC9vN0ambN5KLxNqYMZn9WEzs_dFDiPf13SaU97vXjOLZnFRuY649W8F-Xww2twmNW-wBDTTR9sekK2kfddypBw1351xxfwbtbKLkjD_nQeicgRkDNhGOFh_CtcD4FcenMjoed1-vXHQTkUbykQtk0mvkvxo5k',
      ],
      attendeeCount: 42,
      buttonText: 'Kaydol',
    },
    {
      imageSrc:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuCKIxLiGLW3xIQm-Q_9y8yc2F2IGWTpEr6TjjbVYywGW7setTFROILOsnnC_netMOIgXH6FELuv5On4zujVyv-4tA4MGYtF4_LErQhwEVosaxtkpLtSeqcqRRds1zPv6yuc45QFVPTO87bkU3hrHFX93cfR1FzQTSZSKwqoUXD1tnJGvcPlg5tG63eZVSaPbvKNZNqYyJ_rqs1fLyDH4DM1Pz0KMUe6R3eexhyH0NdqhRih3CtNjG5kH6-v0Sj607N95vtLL-dCtP8',
      imageAlt: 'Colorful concert lights and silhouette of a music band',
      dateMonth: 'EKİM',
      dateDay: '28',
      category: 'Müzik',
      categoryColorClass: 'bg-purple-500',
      title: 'Kampüs Rock Gecesi',
      description:
        'Üniversite gruplarının sahne alacağı unutulmaz bir rock müzik gecesi.',
      location: 'Açık Hava Tiyatrosu',
      attendees: [
        'https://lh3.googleusercontent.com/aida-public/AB6AXuC3x-DvXM3UuhY09pBARPJLGa883JnAi_VtyfjMdgsSIFKwZGjofjZfolxnEkPeSNRV36ZvObHRICQDRWKKfJDzHeafbl0bFDI-sIS9VSVruon-emaxU_GkyejIgqEtHLe32QAlYTLyB8pbstt2Gym13SjT-2R1tAOhUXDJLIQ0jGFSbQxhKF7JLsfhxW1uvcBGTsOXt_774dWInjtf56K2xmDq-Nta0Gbb_0hGbIfhJzRYV8XH492keke0Dgerq5xlzwc0gW2GlNk',
        'https://lh3.googleusercontent.com/aida-public/AB6AXuBKVuMi-DDFMgxbSZv2yhOhRIjcI55F5XUqnY2B-sGShv5hq1vcN0GVPXgREuaLHkdIHB1FYG9dc_w3QkpELFUTNNcDEq0Gf5FKwLuFgnozpDMSeFzWjeoyOVzOyg-SHAZDJ7aXj2YIkGzc4Zl1WMikKH8YhbYZhLfLCzWvVdLqjyu2GwSjRs0rU9ARSK0ndUqdAdjRq4D1LOxqTLrii8k6RCVrMks9TgMujfZ7TmdOxYRtL7uadw6CBYMsvNlaNLO_AE1JiKvg9jY',
      ],
      attendeeCount: 120,
      buttonText: 'Kaydol',
    },
    {
      imageSrc:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuATZrEEogjAok2wnkzH192VykfknEqHHQ_FHuYvO1Hbfpqyx2KDgCU99bQ1tZjneqka_j_m5gmGJ9B8sKBFuwd1QLMq1RLbmgAtSfalNMS70wmUBQJkLptmQon8y-yHxRVplf3rbYJpxYUwLzjHNRI_6rnrm4voMj_JmYQhb0wNbmO2HWMKvWP-JILia_08iOQNMv1QO2LoJZMiMwyutw-McIZDYkLfGqpq8IWzbVegkX0bWr213s8qpXzBxlUCSg4zZVPphiac2N8',
      imageAlt: 'Group of people brainstorming in a workshop setting',
      dateMonth: 'KAS',
      dateDay: '02',
      category: 'Kariyer',
      categoryColorClass: 'bg-green-500',
      title: 'CV Hazırlama Atölyesi',
      description:
        'Profesyonel İK uzmanları eşliğinde etkileyici bir CV hazırlamanın püf noktaları.',
      location: 'Kütüphane Seminer Odası',
      attendees: [
        'https://lh3.googleusercontent.com/aida-public/AB6AXuBNrh-dEZ-aHBRqXeURpHTFZJEYTR2vjnPp3isCQdRs_9tCHBT3MwccueRht-vC8YYZIg30fkAk_GFUae04BV-s6K4SkxILUOsiJoKiWoyNJOr5P0QlJZNImzzytPTHgu3fnoSvcuO0dsArr-nloI2cc-ZyhhR6kOcvVwBzP1OO71REO4ZoIPD9qhd5gyvyNZIayYRBg5W4sUDOgqRBVKBiaDoI7pytmJfhVapf7kEK1Mk90A7UjCOlXUN6qg1OA14FMHg_4JF-0LU',
        'https://lh3.googleusercontent.com/aida-public/AB6AXuCYdGRztjMHWpT52anEDwLO0_a1N8ve122oYiv1l8d_qyQMaIctm_-szIeart2m2WimkqeD-g_uvr3-LiBNpjrbGCe6rpebtOCk-RVZIyS7AHlrlFygnYJV-4hA82gN5c4BFrPa9-e6DBGiGQDh2TG_JbnS-0s7seSLI6AB2iUfsDofPuy72_wWWI4JWh_i4E5GcsZepXpnLsod-VLWKQF_FA0_DARPUDczK5uMXFfg5wg0jV4xhJSfzb1BPGzvdZPqNasM8qweY98',
      ],
      attendeeCount: 15,
      buttonText: 'Kaydol',
    },
    {
      imageSrc:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuAbC-Mw8FnJNM3AbUofjp0iULScOGariX2jumS4kTJ0TT9Nq_CV_Z4ivdOy6Fsy8ZwR-YEjIQzrTiWUV6WK_PH2Wepe79b6Qqo2ztLaxi7w7qYCCfR_sbJJQcdu-wGJz9rBUxVoZ-phaxYDThkI1VokoMnqHiqVLb8XdYCaPFsZ39G3WemajS6h_uhejddJps66pBQ-RKpA9zb3cq1y_lscX4daYeSX7wvhfFvGXPCBwaLv14z_7PKnJmNsW8lPbyDuyiuCHS7tfZ4',
      imageAlt: 'Basketball players in action during a game',
      dateMonth: 'KAS',
      dateDay: '05',
      category: 'Spor',
      categoryColorClass: 'bg-orange-500',
      title: 'Fakülteler Arası Basketbol Turnuvası',
      description:
        'Kıyasıya mücadele, takım ruhu ve eğlence! Takımını desteklemeye gel.',
      location: 'Kapalı Spor Salonu',
      attendees: [
        'https://lh3.googleusercontent.com/aida-public/AB6AXuD3wWdi79707nIkCIPNS0UxH6ZIEPfJPIi8GTR6aO7p9WgSwnUucvJ5LERbiYnc4tYQGZQsAOIwWvamOozpXogvt1AEkLLzSEKAXz3e2IkKhIl5YrykB7LNM-dNwhEvqHz_8so6u7xU1eIvA3gpwOXg4irN6MdPgOjrq2FFY8v-AECnV8xMyA5hhP7xZAYFaJ3otxlKU2gLCohNUajH9VplKXyU_c_gxhvpoL0oZ-Hc-7W2iSLctckDexuzRBM81j5MO_4wrdJMOzs',
        'https://lh3.googleusercontent.com/aida-public/AB6AXuCf_EDzgCoruTg4Al3xhpOc7xvVYnk-nX7hPS_d1fetbffzzXwFvWyKbqz2EgedfprDf6YqiW-nARam9taDcgwvtLaBTTQ_rEVlnLQyHA5eJStltqGEhHOUIqX279Ct_TykfP6LGuk5g1e0Hj8LtqamSh0EtLCxvGinAGD9DcEbaeZLe6HwYS6xwAqk7hUf5r_5oXd8AlCO8BoeSrHQDCU6DFWKoI_pNolEmT8qkoxbiEDgCUbSdzL7F2wnLmUGaYUAC_Y61kWbXKQ',
      ],
      attendeeCount: 200,
      buttonText: 'Kaydol',
    },
    {
      imageSrc:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuDSmB61ZdzpZCA-niUlxlZ2Qf6cmADE5StzloqHZTFFvsDZkNrnpbvTVRMA7hLXv-1Y-yDzgyKZZ-s05PxTK5Cm68PVPJbhtopFwPDN3nRxm3tEWGf4F53WabI64rPtRHWgZXtSX1OnFT6AA83OTHL9hHwp6LsuqXFfGZy9hnMPsYg6cQbJLlX0nKIwq8uTsphmdL-t-wyi-k6XWnBiCB1cfKogKZZMRInpt08u_s6O7iHF6Ze34hm9tNApJySO0t3h6VS_eUvgsAY',
      imageAlt: 'Abstract art painting colorful canvas',
      dateMonth: 'KAS',
      dateDay: '08',
      category: 'Sanat',
      categoryColorClass: 'bg-pink-500',
      title: 'Modern Sanat Sergisi',
      description:
        'Güzel Sanatlar Fakültesi öğrencilerinin yıl sonu karma sergisi.',
      location: 'GSF Sergi Salonu',
      attendees: [
        'https://lh3.googleusercontent.com/aida-public/AB6AXuAdiYZpMGfUKPdHUU_2RQatmtgQRVS2AEX2kU3hxYT2_iUFzODaMLu9Hd574-5sZeYcfRdV60gILuqJNrEI63WsRZRC9qaSlXOlfskJXDSFX-Hs6GkUg9ZyQDsxnIvO7UOn3fxMlu9EpVB7MO6diV6GRbmNoKP2wkQvHhMmZYu4tyPmgzbC96-slw6U6SnCxLssglEOSpUlrI7Gpas5JNDu4gSVwLmiuk84T9J9AjaNB7cxaaQB3m4lSW6MtdOGpGeUSrt6UsfLv6c',
        'https://lh3.googleusercontent.com/aida-public/AB6AXuBcxu37WH-4oui6XmX7pzZ_WS3D2eaBbzov8NS6A7O8gzhikcWWlzMYwcDlu9ThZYIiRTb6BUd2O5v61J2eCaJno9a2LWY57_7gQRYqvktu2xRfrQ8KwfEUzeQrIrFzlcbjPZGbgmWOy7sv3kd2IezahJjZ44XvsKxRU07gHlOHmED8I9U4814G0r3MJCC98fZR8bsyK91NTFMrqnwuipfx9y50yE8fFULvYDVUKRrySrWh7cAlg0-peUwvP9S1WsiqPimEyB7E9CI',
      ],
      attendeeCount: 56,
      buttonText: 'Kaydol',
    },
    {
      imageSrc:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuDIqnVztoxY71a_cRlAVfZTp_JIc7LbzFGhLus-mClUVgyRBwiKAyd59j6KIRP_sVLltqvp73oxF3v2-cdEjI7rXNzAwe_o08OdcB8kxsmATYIKTtO6KrzKzOkDdcRKjP4y-4khF2jeNyebijhbgEdh07SqS3mnw6DOt9HqezMbAUyjFCYZtfeyojZpaaihfG8cCYHGE8QqyBXVDppDviG2wEk10NLbJrqTUGZTnQQqTVuyLkzbsWqYs_zv1ztJKK-mpAxuBa7jkOc',
      imageAlt: 'People discussing in a meeting room',
      dateMonth: 'KAS',
      dateDay: '12',
      category: 'Kulüp',
      categoryColorClass: 'bg-yellow-600',
      title: 'Münazara Kulübü Tanışma',
      description: 'Yeni üyelerle tanışma ve dönem planlaması toplantısı.',
      location: 'Öğrenci Merkezi, 101',
      attendees: [
        'https://lh3.googleusercontent.com/aida-public/AB6AXuBNziE6g3Wl-LOqJTHx4OogwEKe9sNHHR1plvdYUY07MulGun9QGqvT8oI3AtADDfzuGyKJ14p-O4v41vE5E2EFOCfjw3hmUioJhAzxeAfcv4fND7tZSJNgZUoxkQx-f9noYl2GQ1RMg9BpBbBJor1KXDHypGzPvA7E4Pmv4MdzLTb-oP7nypCyI27Z1-pkfkUa0E_jzf4jI7oyku4oQGzKlJGMNF_Kg5_sJqJWlkfJRdRF9oQ906Vsidur41ibFBnAsNIIQOTbMFs',
        'https://lh3.googleusercontent.com/aida-public/AB6AXuBW0emsTqjd2BWRLGeD7ld6_BrsoAFfQy921bJvC2pt3vzpo3peOj7Vs1fd1vBMZ1CxuIBd8E2cSMZPGOx22AWr9prWNrYrmLFJebYrZbpRnw5Q-bRKIgc8eUbG6jM1s-DZPqDE2rP5nAvY8DQFAVBM6eM2vqLWpzhnJOTDJLjaA3BQLRXyTl_Y80qFc9ZV_m_-pJQSPSz0yWYwS5o8wkOiudXrFTNHyUAd9E6Fkz9sg5Vb0YSP--n31eTxgoasc52b63wP0f8Vv30',
      ],
      attendeeCount: 24,
      buttonText: 'Kaydol',
    },
  ];

  return (
    <main className="flex-1 flex flex-col items-center w-full">
      <div className="w-full max-w-[1280px] px-4 md:px-8 py-6 md:py-10 flex flex-col gap-10">
        <HeroSection />
        <EventFilters />
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {events.map((event, index) => (
            <EventCard key={index} {...event} />
          ))}
        </section>
        <div className="flex justify-center pb-10">
          <button className="px-8 py-3 rounded-lg bg-white dark:bg-card-border border border-gray-200 dark:border-transparent text-gray-900 dark:text-white text-sm font-bold hover:bg-gray-50 dark:hover:bg-[#2a3855] transition-colors shadow-sm">
            Daha Fazla Göster
          </button>
        </div>
      </div>
    </main>
  );
}
