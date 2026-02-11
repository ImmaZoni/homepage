import { useTranslation } from "next-i18next";

import Container from "components/services/widget/container";
import Block from "components/services/widget/block";
import useWidgetAPI from "utils/proxy/use-widget-api";

export default function Component({ service }) {
  const { t } = useTranslation();
  const { widget } = service;
  const { data, error } = useWidgetAPI(widget, "info");

  if (error) {
    return <Container service={service} error={error} icon="zfs.svg" />;
  }

  if (!data) {
    return (
      <Container service={service} icon="zfs.svg">
        <Block label="zfs.pool" />
        <Block label="zfs.size" />
        <Block label="zfs.free" />
        <Block label="zfs.health" />
      </Container>
    );
  }

  return (
    <Container service={service} icon="zfs.svg">
      <Block label="zfs.pool" value={data.name} />
      <Block label="zfs.size" value={t("common.size", { value: data.size })} />
      <Block label="zfs.free" value={t("common.size", { value: data.free })} />
      <Block label="zfs.health" value={data.health} />
    </Container>
  );
}
