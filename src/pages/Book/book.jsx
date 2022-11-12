import styles from './book.module.css';
import Button from '@mui/material/Button';
import MenuBookIcon from '@mui/icons-material/MenuBook';

// обложка маленькая и большая при открытии
// название
// все авторы
// все категории
// полное описание
// количество страниц
// издатель
// дата издания
// электронная книга
// бесплатный фрагмент
// язык
// рейтинг

export const Book = () => {
    return (
        <>
            <div className={styles.header} />
            <div className={styles.content}>
                <div className={styles.block}>
                    <img 
                        src="http://books.google.com/books/publisher/content?id=uHx1DwAAQBAJ&printsec=frontcover&img=1&zoom=2&edge=curl&imgtk=AFLRE72rSN84I7IEyS5nJp6-nmMMGnB7R8V7xAL3pjEXAdlFh8egtTPm7M3fiOF_6CGyHwy34aehshIwJ-eVR6NYGnxP-wmkZTKcDvtlNIIliM3D7sBQ4a8dnBLpxCGN63N9ob9RHhvy&source=gbs_api" 
                        alt="" 
                        className={styles.image}
                    />
                    <div className={styles.info}>
                        <h1>Терри Пратчетт. Дух фэнтези</h1>
                        <p className={styles.author}>Крейг Кэйбелл</p>
                        <p>Жанр: </p>
                        <div className={styles.publication}>
                            <p>Litres</p>
                            <p>12.11.2022г</p>
                        </div>
                        <p>Количество страниц: </p>
                        {/* если нет фрагмента то сделать disabled */}
                        <Button variant="contained" startIcon={<MenuBookIcon />} size='large' className={styles.button} >Читать ознакомительный фрагмент</Button>
                        <p>рейтинг</p>
                    </div>
                </div>
                <div className={styles.about}>
                    <p>О книге:</p>
                    <p>История экстраординарной жизни одного из самых любимых писателей в мире! В мире продано около 100 миллионов экземпляров переведенных на 37 языков романов Терри Пратчетта. Целый легион фанатов из года в год читает и перечитывает книги сэра Терри. Все знают Плоский мир, первый роман о котором вышел в далеком 1983 году. Но он не был первым романом Пратчетта и даже не был первым романом о мире-диске. Никто еще не рассматривал автора и его творчество на протяжении четырех десятилетий, не следил за возникновением идей и их дальнейшим воплощением. В 2007 году Пратчетт объявил о том, что у него диагностирована болезнь Альцгеймера и он не намерен сдаваться. Книга исследует то, как бесстрашная борьба с болезнью отразилась на его героях и атмосфере последних романов. Книга также включает обширные приложения: библиографию и фильмографию, историю театральных постановок и приложение о котах.</p>
                </div>
            </div>
        </>
    )
}