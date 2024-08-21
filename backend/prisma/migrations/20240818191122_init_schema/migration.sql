-- DropIndex
DROP INDEX "Validation_id_key";

-- AlterTable
CREATE SEQUENCE transaction_id_seq;
ALTER TABLE "Transaction" ALTER COLUMN "id" SET DEFAULT nextval('transaction_id_seq');
ALTER SEQUENCE transaction_id_seq OWNED BY "Transaction"."id";

-- AlterTable
CREATE SEQUENCE validation_id_seq;
ALTER TABLE "Validation" ALTER COLUMN "id" SET DEFAULT nextval('validation_id_seq'),
ADD CONSTRAINT "Validation_pkey" PRIMARY KEY ("id");
ALTER SEQUENCE validation_id_seq OWNED BY "Validation"."id";
