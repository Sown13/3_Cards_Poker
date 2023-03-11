Bài 3 cây - Three Card Poker;

I/ Cách chơi:
- Bộ bài có 36 lá (bỏ đi hết các lá 10,J,Q,K trong bài tây)
- Chọn số người muốn chơi
- Chọn số tiền tham dự của mỗi người tham gia
- Chọn số tiền đặt cược cho mỗi vòng
- Bắt đầu vòng đấu, mỗi người chơi góp vào Pot số tiền đặt cược đã thống nhất ban đầu
- Chia bài, mỗi người có 3 lá bài
- Quy tắc tính điểm:
 + Tính tổng điểm 3 lá bài, lấy số hàng đơn vị sau khi tính tổng làm điểm của người chơi
 + Trường hợp đặc biệt số hàng đơn vị là 0 thì người chơi được tính là có 10 điểm (cao nhất)
 + Trường hợp những người chơi cao điểm nhất có điểm bằng nhau thì xét tới chất bài của 2 bên
    + Cách xét: Dô > Cơ > Tép > Bích
 + Nếu chất bài của 2 bên bằng nhau, ta xét tới giá trị của lá bài có chất cao nhất
   + Trường hợp đặc biệt: 1 (Ace hay Át) được tính là giá trị cao nhất: 1>9>8>...>2
 + Thông báo người thắng
 + Người thắng nhận được số tiền trong Pot
 + Thông báo người thắng, bắt đầu lại từ đầu cho đến khi chỉ còn 1 người còn tiền là người thắng sau cùng

II/ Tính năng:

- Tạo bộ bài
- Chọn số người chơi, tên người chơi
- Chia bài, có thể chia đến khi hết bài trong bộ bài hoặc tạo bộ bài mới mỗi lần trước khi chia bài
- Tự động tính điểm, quyết định người thắng mỗi vòng chia bài
- Tự động tính tiền, quyết định người thắng cuối cùng
- [Chơi thủ công] mỗi nút có chức năng riêng, tạo bài, chia bài, tính điểm, báo kết quả
- [Quick Play] Ấn 1 nút chơi ngay (tạo bài mới, chia bài, tính điểm, báo kết quả)
- [Replay] Không cần reload lại page

[//]: # (- [Random user] chọn ngẫu nhiên số người tham gia chơi và tên ) chưa triển khai

III/ Các thuật toán và kỹ thuật quan trọng:

- Class,Object: Quy định các thuộc tính, method của lá bài và người chơi
- Tạo người chơi:
   + Sử dụng mảng chứa các Object thuộc lớp Players được khởi tạo ( useres )
   + Sử dụng mảng chứa các Object là các Player thua cuộc ( useresRemoved )
- Tạo bộ bài mới:
   + Tạo 1 mảng chứa bộ bài
   + Tạo 4 mảng chứa thuộc tính của lá bài : Giá trị tính điểm của lá bài// Tên chất bài // Giá trị của chất bài //
     // Giá trị so sánh giữa các lá bài
   + Sử dụng vòng lặp for duyệt mảng chứa bộ bài để tạo ra từng lá bài và push() vào bộ bài
- Chia bài:
   + Class Players có thuộc tính playerDeck là 1 mảng để chứa bài được chia
   + Dùng 1 thuật toán ngẫu nhiên, thuật toán này tinh chỉnh để động theo vòng lặp for
    và số lượng lá bài còn lại trong bộ bài. Vì vậy số ngẫu nhiên max sẽ giảm dần
   mỗi khi 1 lá bài trong bộ bài bị lấy ra (0-35; 0-34;0-33;...)
   + lấy 1 lá bài (phần tử) ngãu nhiên trong bộ bài Deck[index]; index = Math.random ở trên,
   push phần tử này vào mảng playerDeck đồng thời xóa đi ở mảng Deck
   + Dùng vòng lặp for để thực hiện chia bài cho các người chơi
- Tính điểm, Tính tiền và quyết định người thắng:
   + Dùng các câu lệnh điều kiện if, else if để quyết định

IV/ Bản quyền:

- Vẽ bài poker: sử dụng project của https://tairraos.github.io/Poker.JS/ để vẽ
