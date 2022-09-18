import { TouchableOpacity, View, Text } from "react-native";
import { styles } from "./styles";
import { DuoInfo } from "../Duoinfo";
import { THEME } from "../../theme";
import { GameController } from "phosphor-react-native";

export interface DuoCardProps {
  id: string;
  name: string;
  weekDays: string[];
  useVoiceChannel: boolean;
  yearsPlaying: number;
  hourStart: string;
  hourEnd: string;
}

interface Props {
  data: DuoCardProps;
  onConnect: () => void;
}

export function DuoCard({ data, onConnect }: Props) {
  return (
    <View style={styles.container}>
      <DuoInfo label="Nome" value={data.name}></DuoInfo>
      <DuoInfo
        label="Tempo de jogo"
        value={`${data.yearsPlaying} anos`}
      ></DuoInfo>
      <DuoInfo
        label="Disponibilidade"
        value={`${data.weekDays.length} dias \u2022 ${data.hourStart} - ${data.hourEnd}`}
      ></DuoInfo>
      <DuoInfo
        label="Chamada de audio?"
        value={`${data.useVoiceChannel ? "Sim" : "Não"}`}
        colorValue={
          data.useVoiceChannel ? THEME.COLORS.SUCCESS : THEME.COLORS.ALERT
        }
      ></DuoInfo>
      <TouchableOpacity style={styles.button} onPress={onConnect}>
        <GameController color={THEME.COLORS.TEXT} size={20} />
        <Text style={styles.buttonTitle}>Conectar</Text>
      </TouchableOpacity>
    </View>
  );
}
