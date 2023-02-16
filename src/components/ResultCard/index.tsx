import Image from 'next/image';
import { Container } from './styles';

import meme from '@/src/assets/meme.png';
import { Download } from '@/src/assets/icons/Download';

type ResultCardProps = {
  author: string;
  score: number;
  url: string;
};

const ResultCard = ({ author, score, url }: ResultCardProps) => {
  return (
    <Container>
      <div className="image-container">
        <Image alt="meme" src={url} fill className="meme" />
      </div>
      <footer>
        <div className="left">
          <div className="score">
            <strong>{score}</strong>
            <span>pontos</span>
          </div>
          <div className="made-by">
            <strong>FEITO POR</strong>
            <span>{author}</span>
          </div>
        </div>

        <Download size={20} className="download-icon" />
      </footer>
    </Container>
  );
};

export default ResultCard;
