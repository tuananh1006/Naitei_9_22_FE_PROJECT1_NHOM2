import Breadcrumb from "../../components/Breadcrumb";

interface SectionData {
  title: string;
  content: (string | { type: 'list'; items: string[] })[];
}

const Section = ({ title, content }: SectionData) => (
  <section>
    <h2 className="text-lg font-semibold text-green-600 mb-4">{title}</h2>
    <div className="space-y-4">
      {content.map((item, index) => (
        typeof item === 'string' ? (
          <p key={index} className="mb-4">{item}</p>
        ) : (
          <div key={index} className="space-y-4">
            {item.items.map((listItem, listIndex) => (
              <p key={listIndex}>
                <strong>{listIndex + 1}.</strong> {listItem}
              </p>
            ))}
          </div>
        )
      ))}
    </div>
  </section>
);

export default function InformationPage() {
  const breadcrumbItems = [
    { label: "Trang chủ", href: "/" },
    { label: "Giới thiệu" }
  ];

  const sections: SectionData[] = [
    {
      title: "I. QUÁ TRÌNH HÌNH THÀNH VÀ PHÁT TRIỂN",
      content: [
        "Trong những năm qua, xã hội phát triển, kinh tế tăng trưởng đồng thời chất lượng cuộc sống của người dân ngày càng được nâng cao. Nhiều trung tâm thương mại, nhà cao tầng, biệt thự được mọc ra kèm theo đó là nhu cầu mua sắm các mặt hàng phục vụ nhu cầu cuộc sống hàng ngày như hoa và quà tặng.",
        "Green Shop khai trương siêu thị số 442 Đội Cấn, Cống Vị, Ba Đình, Hà Nội, chính thức tham gia vào lĩnh vực kinh doanh bán lẻ trực tuyến, tạo ra một phong cách mua sắm hoàn toàn mới với người dân thủ đô, thông qua cung cấp các sản phẩm và dịch vụ tới người tiêu dùng."
      ]
    },
    {
      title: "II. MỤC TIÊU CHIẾN LƯỢC",
      content: [
        {
          type: 'list',
          items: [
            "Tối đa hoá giá trị đầu tư của các cổ đông; giữ vững tốc độ tăng trưởng lợi nhuận và tình hình tài chính lành mạnh;",
            "Không ngừng nâng cao động lực làm việc và năng lực cán bộ; Green Shop phải luôn dẫn đầu ngành bán lẻ trong việc sáng tạo, phát triển chính sách đãi ngộ và cơ hội thăng tiến nghề nghiệp cho cán bộ của mình;",
            "Duy trì sự hài lòng, trung thành và gắn bó của khách hàng với Green Shop; xây dựng Green Shop thành một trong những công ty hàng đầu Việt Nam có chất lượng dịch vụ tốt nhất do khách hàng lựa chọn.",
            "Phát triển Green Shop thành một trong những công ty hàng đầu Việt Nam về: quản lý tốt nhất, môi trường làm việc tốt nhất, văn hoá doanh nghiệp chú trọng khách hàng, thúc đẩy hợp tác và sáng tạo, linh hoạt nhất khi môi trường kinh doanh thay đổi."
          ]
        }
      ]
    },
    {
      title: "III. THẾ MẠNH VÀ ĐỊNH HƯỚNG CỦA CÔNG TY",
      content: [
        "Với kim chỉ nam là \"Không ngừng phát triển vì khách hàng\", Green Shop đã quy tụ được Ban lãnh đạo có bề dày kinh nghiệm trong lĩnh vực bán lẻ, không chỉ mạnh về kinh doanh mà còn mạnh về công nghệ, có nhiều tiềm năng phát triển, kết hợp với đội ngũ nhân viên trẻ, năng động và chuyên nghiệp, tạo nên thế mạnh nòng cốt của công ty để thực hiện tốt các mục tiêu đề ra.",
        "Hơn nữa, trên cơ sở nguồn lực của công ty và nhu cầu của xã hội, Green Shop lựa chọn phát triển kinh doanh hoa và quà tặng phục vụ nhu cầu thiết yếu của người dân với các sản phẩm đa dạng, phong phú, mang lại giá trị gia tăng cho người tiêu dùng thông qua các dịch vụ sau bán hàng.",
        "Qua quá trình phát triển, bên cạnh việc thiết lập được một hệ thống đối tác trong nước và ngoài nước đến từ các doanh nghiệp lớn, có thế mạnh trong lĩnh vực bán lẻ, công ty sẽ đầu tư vào các ngành nghề mới như bất động sản, khai thác khoáng sản, đầu tư tài chính... trong thời gian tới."
      ]
    }
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <Breadcrumb items={breadcrumbItems} />
      <h1 className="text-2xl font-bold text-green-600 mb-8">GIỚI THIỆU</h1>
      <div className="space-y-8 text-gray-700 leading-relaxed">
        {sections.map((section, index) => (
          <Section key={index} {...section} />
        ))}
      </div>
    </div>
  );
}

