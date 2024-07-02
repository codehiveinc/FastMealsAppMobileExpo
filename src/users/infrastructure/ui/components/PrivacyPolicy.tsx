import { ScrollView, Text, StyleSheet } from "react-native";

const PrivacyPolicy = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Política de Privacidad</Text>

      <Text style={styles.heading}>1. Introducción</Text>
      <Text style={styles.paragraph}>
        En Fast Meals, valoramos su privacidad y estamos comprometidos a
        proteger sus datos personales. Esta Política de Privacidad explica cómo
        recopilamos, utilizamos, y compartimos su información cuando usa nuestra
        aplicación.
      </Text>

      <Text style={styles.heading}>2. Información que Recopilamos</Text>
      <Text style={styles.subheading}>
        2.1 Información que Usted Proporciona
      </Text>
      <Text style={styles.paragraph}>
        - Información de Registro: Cuando se registra, recopilamos su nombre,
        dirección de correo electrónico, número de teléfono y dirección.
        {"\n"}- Información de Pago: Recopilamos datos necesarios para procesar
        sus pagos, como información de tarjetas de crédito o cuentas de PayPal.
        {"\n"}- Preferencias y Comentarios: Cualquier información que usted
        proporcione a través de preferencias de usuario o comentarios.
      </Text>
      <Text style={styles.subheading}>
        2.2 Información Recopilada Automáticamente
      </Text>
      <Text style={styles.paragraph}>
        - Información de Dispositivo: Recopilamos información sobre su
        dispositivo, como modelo, sistema operativo, y dirección IP.
        {"\n"}- Datos de Uso: Recopilamos datos sobre su interacción con nuestra
        aplicación, como las páginas visitadas, el tiempo de uso y las acciones
        realizadas.
      </Text>

      <Text style={styles.heading}>3. Uso de la Información</Text>
      <Text style={styles.paragraph}>
        Utilizamos la información recopilada para:
        {"\n"}- Procesar y entregar sus pedidos.
        {"\n"}- Mejorar nuestros servicios y personalizar su experiencia.
        {"\n"}- Comunicarnos con usted sobre su cuenta y nuestros servicios.
        {"\n"}- Cumplir con obligaciones legales y resolver disputas.
      </Text>

      <Text style={styles.heading}>4. Compartir Información</Text>
      <Text style={styles.paragraph}>
        Podemos compartir su información con:
        {"\n"}- Proveedores de Servicios: Terceros que nos ayudan a proporcionar
        servicios, como procesamiento de pagos y entrega de pedidos.
        {"\n"}- Afiliados y Socios Comerciales: Con su consentimiento o cuando
        sea necesario para proporcionarle un servicio solicitado.
        {"\n"}- Autoridades Legales: Cuando sea requerido por ley o para
        proteger nuestros derechos y seguridad.
      </Text>

      <Text style={styles.heading}>5. Seguridad de la Información</Text>
      <Text style={styles.paragraph}>
        Implementamos medidas de seguridad para proteger su información contra
        accesos no autorizados, alteraciones, divulgaciones o destrucciones. Sin
        embargo, ninguna transmisión de datos por Internet o sistema de
        almacenamiento es completamente seguro, por lo que no podemos garantizar
        la seguridad absoluta.
      </Text>

      <Text style={styles.heading}>6. Sus Derechos</Text>
      <Text style={styles.paragraph}>
        Usted tiene derecho a:
        {"\n"}- Acceder, corregir o eliminar su información personal.
        {"\n"}- Optar por no recibir comunicaciones promocionales.
        {"\n"}- Retirar su consentimiento en cualquier momento.
      </Text>

      <Text style={styles.heading}>7. Retención de Datos</Text>
      <Text style={styles.paragraph}>
        Retenemos su información personal solo durante el tiempo necesario para
        cumplir con los fines descritos en esta Política de Privacidad, a menos
        que se requiera o permita un período de retención más largo por ley.
      </Text>

      <Text style={styles.heading}>
        8. Cambios a esta Política de Privacidad
      </Text>
      <Text style={styles.paragraph}>
        Podemos actualizar esta Política de Privacidad ocasionalmente. Le
        notificaremos sobre cambios materiales mediante un aviso en nuestra
        aplicación o por otros medios apropiados antes de que el cambio entre en
        vigor.
      </Text>

      <Text style={styles.paragraph}>
        Fecha de entrada en vigor: 27 de junio de 2024
      </Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
  },
  heading: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 16,
    marginBottom: 8,
  },
  subheading: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 8,
    marginBottom: 4,
  },
  paragraph: {
    fontSize: 14,
    lineHeight: 22,
  },
});

export default PrivacyPolicy;
