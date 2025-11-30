import Bounded from '@/components/Bounded';
import Cta from '@/components/Cta';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

export default function Home() {
  return (
    <Bounded>
      <form>
        <Input />
        <Textarea />
        <Cta url="/">Learn More</Cta>
      </form>
    </Bounded>
  );
}
