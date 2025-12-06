# Documentação de Alterações

## Data: 2025-01-27

### Integração do Formulário com N8N

#### Atualização - Debug e Melhorias (2025-01-27)
- **Melhorado tratamento de erros** com informações mais detalhadas
- **Ajustado tratamento de resposta** do N8N para aceitar diferentes códigos de status HTTP
- **Adicionado header Accept** na requisição
- **Integração testada e funcionando** - logs de debug removidos após validação

### Integração do Formulário com N8N

#### Alteração Realizada
- **Arquivo modificado**: `src/components/CTA.jsx`
- **Descrição**: Conectado o formulário "Agende sua Demonstração" ao workflow N8N "LP.HUBPDV.ONLINE" através de webhook.

#### Detalhes Técnicos

1. **Webhook N8N Configurado**:
   - Workflow: `LP.HUBPDV.ONLINE`
   - ID do Webhook: `27882574-9449-4802-9e93-2811036cca28`
   - URL de Produção: `https://workflowwebhook.gestorbyte.com.br/webhook/27882574-9449-4802-9e93-2811036cca28`
   - Método HTTP: POST
   - Content-Type: application/json

2. **Dados Enviados ao N8N**:
   - `name`: Nome completo do usuário
   - `email`: Email corporativo
   - `phone`: Telefone/WhatsApp
   - `company`: Nome da empresa
   - `employees`: Número de funcionários (opcional)
   - `interest`: Tipo de interesse (Demonstração ou Teste Gratuito)
   - `timestamp`: Data e hora do envio (ISO 8601)
   - `source`: Identificador da origem (LP.HUBPDV.ONLINE)

3. **Funcionalidades Implementadas**:
   - Envio assíncrono dos dados do formulário para o webhook do N8N
   - Tratamento de erros com feedback ao usuário
   - Suporte a variável de ambiente `VITE_N8N_WEBHOOK_URL` para configuração flexível
   - Mantida a funcionalidade de redirecionamento para WhatsApp após envio bem-sucedido
   - Loading state durante o envio
   - Mensagem de sucesso após envio

4. **Configuração de Ambiente**:
   - A URL do webhook pode ser configurada através da variável de ambiente `VITE_N8N_WEBHOOK_URL`
   - Se não configurada, utiliza a URL de produção padrão do workflow

#### Relação com o Projeto
Esta alteração integra o formulário de captura de leads da landing page ao sistema de automação N8N, permitindo que todos os dados coletados sejam processados automaticamente pelo workflow configurado. Isso facilita o gerenciamento de leads, permitindo integrações futuras com CRMs, sistemas de email marketing, notificações, etc.

#### Próximos Passos Sugeridos
1. Configurar a variável de ambiente `VITE_N8N_WEBHOOK_URL` no arquivo `.env` para diferentes ambientes (dev, test, prod)
2. Testar o fluxo completo do formulário até o recebimento no N8N
3. Configurar ações adicionais no workflow N8N (ex: envio de email, criação de registro em CRM, etc.)

