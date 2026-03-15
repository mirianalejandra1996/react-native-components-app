import ThemedCard from "@/presentation/shared/ThemedCard";
import ThemedInput from "@/presentation/shared/ThemedInput";
import ThemedText from "@/presentation/shared/ThemedText";
import ThemedView from "@/presentation/shared/ThemedView";
import { useState } from "react";
import { KeyboardAvoidingView, Platform, ScrollView } from "react-native";

const isIOS = Platform.OS === "ios";

const TextInputsScreen = () => {
  const [form, setform] = useState({
    name: "",
    email: "",
    phone: "",
  });

  return (
    <KeyboardAvoidingView
      behavior={isIOS ? "height" : undefined}
      // behavior={isIOS ? "height" : "padding"}
      // behavior={isIOS ? "height" : "padding"}
      // keyboardVerticalOffset={200}
      // style={{ flex: 1 }}
    >
      <ScrollView>
        <ThemedView margin>
          <ThemedCard className="mb-5">
            <ThemedInput
              placeholder="Nombre Completo"
              autoCapitalize={"words"}
              autoCorrect={false}
              // keyboardType="numeric"
              // autoComplete=""
              onChangeText={(text) => setform({ ...form, name: text })}
            />
            <ThemedInput
              placeholder="Correo electrónico"
              autoCorrect={false}
              keyboardType="email-address"
              onChangeText={(text) => setform({ ...form, email: text })}
            />

            <ThemedInput
              placeholder="Teléfono"
              autoCorrect={false}
              keyboardType="name-phone-pad"
              onChangeText={(text) => setform({ ...form, email: text })}
            />
          </ThemedCard>
          <ThemedCard className="my-2">
            <ThemedText>{JSON.stringify(form, null, 2)}</ThemedText>
          </ThemedCard>
          <ThemedCard className="my-2">
            <ThemedText>{JSON.stringify(form, null, 2)}</ThemedText>
          </ThemedCard>
          <ThemedCard className="my-2">
            <ThemedText>{JSON.stringify(form, null, 2)}</ThemedText>
          </ThemedCard>
          <ThemedCard className="my-2">
            <ThemedText>{JSON.stringify(form, null, 2)}</ThemedText>
          </ThemedCard>
          <ThemedCard className="my-2">
            <ThemedText>{JSON.stringify(form, null, 2)}</ThemedText>
          </ThemedCard>
          <ThemedCard className="my-2">
            <ThemedText>{JSON.stringify(form, null, 2)}</ThemedText>
          </ThemedCard>
          <ThemedCard className="my-2">
            <ThemedText>{JSON.stringify(form, null, 2)}</ThemedText>
          </ThemedCard>
          <ThemedCard className="my-2">
            <ThemedText>{JSON.stringify(form, null, 2)}</ThemedText>
          </ThemedCard>
          <ThemedCard className="my-2">
            <ThemedText>{JSON.stringify(form, null, 2)}</ThemedText>
          </ThemedCard>
          <ThemedCard className="my-2">
            <ThemedText>{JSON.stringify(form, null, 2)}</ThemedText>
          </ThemedCard>

          <ThemedCard style={{ marginBottom: isIOS ? 100 : 10 }}>
            <ThemedInput
              placeholder="Teléfono"
              autoCorrect={false}
              keyboardType="name-phone-pad"
              onChangeText={(text) => setform({ ...form, email: text })}
            />
          </ThemedCard>
        </ThemedView>
        {/* {isIOS && <View style={{ marginBottom: 100 }} />} */}
      </ScrollView>
    </KeyboardAvoidingView>
  );
};
export default TextInputsScreen;
